from flask import Blueprint, jsonify, render_template
from app.models import Food
from app.db import get_db
from  sqlalchemy.sql.expression import func, select
import sys

bp = Blueprint('home', __name__, url_prefix='/')

# my first route??? does it always have to be index. 
@bp.route('/')
def index():
        
    return render_template(
      'main.html'
    )

# route to get all the food items
@bp.route('/food')
def food_get():
  db = get_db()
  
  #get all the food items (for testing purposes)
  try:
    print('starting query')
    food = (
      db
        .query(Food.foodname)
        .order_by(func.rand())
        .first()
    )
    
  except:
    print('something went wrong with random query')
    print(sys.exc_info()[0])
  
  print('Here comes your food')
  print(food)
  return render_template('food.html', food=food)


    #adding in errorhandler
@bp.route('/*')
@bp.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404
