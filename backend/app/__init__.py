from flask import Flask
from flask_pymongo import PyMongo
from flask_mail import Mail
from .config import Config
from flask_cors import CORS
from flask_jwt_extended import JWTManager  # Import JWTManager


# Initialize Flask-PyMongo extension
mongo = PyMongo()

# Initialize Flask-Mail extension
mail = Mail()

def create_app():
    # Create an instance of Flask
    app = Flask(__name__)
    CORS(app)
   
    # Load configuration from the Config class
    app.config.from_object(Config)

    # Initialize Flask-PyMongo extension with the app
    mongo.init_app(app)

    # Initialize Flask-Mail extension with the app
    mail.init_app(app)
    
    JWTManager(app)


    # Import and register blueprints (routes)
    from .routes.auth import auth_bp
    from .routes.reset_password import reset_password_bp
    from .routes.data_frame import data_frame_bp

   
    app.register_blueprint(auth_bp)
    app.register_blueprint(reset_password_bp)
    app.register_blueprint(data_frame_bp)  # Register the data_frame_bp blueprint


    return app
