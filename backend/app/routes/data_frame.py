from flask import Blueprint, jsonify
from flask_pymongo import MongoClient
from app.config import Config
from bson import ObjectId  # Import ObjectId class from bson module
from flask_jwt_extended import jwt_required, get_jwt_identity

data_frame_bp = Blueprint('data_frame', __name__)  # Define the blueprint named 'data_frame_bp'

client = MongoClient(Config.MONGO_URI)  # Initialize the MongoDB client

# Define routes within the blueprint

@data_frame_bp.route('/get_assetFirstDocument/<user_id>', methods=['GET'])
@jwt_required()  # Requires a valid JWT token
def get_asset_first_document(user_id):
    # Extract the user_id from the JWT token
    current_user_id = get_jwt_identity()

    # Check if the current user is authorized to access this endpoint
    if current_user_id != user_id:
        return jsonify({'message': 'Unauthorized access'}), 401

    # Specify the 'kit' database
    db = client['kit']

    # Query the 'assetFirst' collection for all documents belonging to the user with the provided user_id
    cursor = db.assetFirst.find({'_id': ObjectId(user_id)})

    # Convert cursor to list of documents
    df3_list = list(cursor)

    if not df3_list:
        return jsonify({'message': 'No df3 documents found for the user'}), 404

    # Convert ObjectId to string in each document
    for doc in df3_list:
        doc['_id'] = str(doc['_id'])

    return jsonify(df3_list), 200

@data_frame_bp.route('/get_df3/<user_id>', methods=['GET'])
@jwt_required()  # Requires a valid JWT token
def get_df3(user_id):
    # Extract the user_id from the JWT token
    current_user_id = get_jwt_identity()

    # Check if the current user is authorized to access this endpoint
    if current_user_id != user_id:
        return jsonify({'message': 'Unauthorized access'}), 401

    # Specify the 'kit' database
    db = client['kit']

    # Query the 'assetFirst' collection for the user with the provided user_id
    user = db.assetFirst.find_one({'_id': ObjectId(user_id)})

    if not user:
        return jsonify({'message': 'User not found'}), 404

    # Retrieve the df3 document for the user
    df3 = user.get('df3')

    if not df3:
        return jsonify({'message': 'df3 document not found for the user'}), 404

    return jsonify(df3), 200
