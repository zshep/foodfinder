from flask import Blueprint, render_template
from app.models import Food
from app.db import get_db

bp = Blueprint('home', __name__, url_prefix='/')


@bp.route('/')
def index():
    #get all foods
    db=get_db()
    foods = db.query(Food).all()
    #look into trying to grab a random food from db
    return render_template(
      'main.html',
      foods=foods
    )