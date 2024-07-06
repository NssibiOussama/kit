from flask import Blueprint

auth_bp = Blueprint('auth', __name__)
data_frame_bp = Blueprint('data_frame', __name__)  # Add the data_frame_bp blueprint

from .auth import *
from .data_frame import *  # Import routes related to data frames
