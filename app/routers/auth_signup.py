from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session

import schemas
from crud.users import create_sso_user, create_user
from database import get_db
from utils.jwt_utils import generate_session_token
from services.google_sso_service import get_user_info, create_gsi_user_model
from services.linkedin_sso_service import create_linkedin_user_model, get_access_token


router = APIRouter(
    prefix='/signup',
    tags=['Signup']
)


@router.post('/', status_code=status.HTTP_201_CREATED)
def signup(response: Response, user: schemas.UserSignup, db: Session = Depends(get_db)):
    new_user = create_user(user, db)
    
    to_authorize = schemas.UserSchema.model_validate(new_user)
    token = generate_session_token(to_authorize)

    response.set_cookie(
        key='access_token',
        value=token,
        httponly=True,
        secure=True,
        samesite='lax',
        max_age=86400
    )

    return schemas.UserCreated(
        id=new_user.id, 
        username=new_user.username, 
        date_created=new_user.date_created, 
        sso_user=new_user.sso_user
    )


@router.post('-sso/{provider}', status_code=status.HTTP_201_CREATED)
def sso_signup(response: Response, payload: schemas.PayloadSchema, provider: str, db: Session = Depends(get_db)):
    try:
        if provider == 'linkedin':
            token_data = get_access_token(payload.content)
            user_info = create_linkedin_user_model(token_data)
        elif provider == 'google':
            user_data = get_user_info(payload.content)
            user_info = create_gsi_user_model(user_data)

        new_sso_user = create_sso_user(user_info, db)
        
        to_authorize = schemas.UserSchema.model_validate(new_sso_user)
        token = generate_session_token(to_authorize)

        response.set_cookie(
            key='access_token',
            value=token,
            httponly=True,
            secure=True,
            samesite='lax',
            max_age=86400
        )

        return schemas.UserCreated(
            id=new_sso_user.id, 
            username=new_sso_user.username, 
            date_created=new_sso_user.date_created, 
            sso_user=new_sso_user.sso_user
        )

    except Exception as error:
        raise HTTPException(status_code=500, detail=f"Please contact support. {str(error)}")
