from flask import Blueprint, jsonify, make_response, render_template, request
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

@bp.route('/allfood')
def get_allfood():
  db = get_db()
  allfood = (
      db
        .query(Food.foodname)
        .all()
    )
  print(allfood)

  data = {
    "Test" : "your mom",
    "food_data" : "allfood",

  }

  return jsonify(allfood)



# route to get a single food item
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

  
  return jsonify(food = food[0])

@bp.route('/addfood', methods=['GET','POST'])
def add_food():
  if request.method == 'POST':
 
    data = request.get_json()
    db = get_db()
    print('about to do the post request')
    try:
      newFood = Food(
        foodname = data['foodname'],
        ishot = data['ishot']
      )

      #save to database
      db.add(newFood)
      db.commit()
      print('Newfood has been added', newFood)

    except:

      # insert failed, so send error to front end
      print(sys.exe_info()[0])

      # insert failed, so rollback and send error to front end
      db.rollback()
      return jsonify(message = 'adding new food has failed'), 500  

    return render_template('main.html')
  else:
    return render_template('addfood.html')

    #adding in errorhandler

@bp.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404
