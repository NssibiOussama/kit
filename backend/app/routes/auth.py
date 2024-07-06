from flask import Blueprint, jsonify, request
from ..utils import generate_token
from .. import mongo
from flask_pymongo import MongoClient
from app.config import Config
from flask_jwt_extended import create_access_token


from flask_cors import CORS
auth_bp = Blueprint('auth', __name__)
client = MongoClient(Config.MONGO_URI)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Specify the 'kit' database
    db = client['kit']

    # Query the 'assetFirst' collection for the user with the provided username
    user = db.assetFirst.find_one({'username': username})

    # Check if user exists and password matches
    if not user or user['password'] != password:
        return jsonify({'message': 'Invalid username or password'}), 401

    # If username and password are correct, generate a token with user _id and username
    token = create_access_token(identity=str(user['_id']), additional_claims={'username': user['username']})

    # Return success response with token
    return jsonify({
        'message': 'User logged in successfully',
        'token': token,
        'user_id': str(user['_id'])
    }), 200



