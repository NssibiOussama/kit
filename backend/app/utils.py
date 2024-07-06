import jwt
from datetime import datetime, timedelta
from flask import current_app
from . import mongo

def generate_token(username):
    expiration_time = datetime.utcnow() + timedelta(days=1)
    payload = {
        'username': username,
        'exp': expiration_time
    }
    return jwt.encode(payload, current_app.config['SECRET_KEY'])