import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import {
  getTinderCards
} from './../reducers/TinderCards.reducer';
import './../assets/css/TinderCards.css';

const TinderCards = (props) => {
  const dispatch = useDispatch();
  const [people, setPeople] = useState([]);
  const [lastDirection, setLastDirection] = useState("");
  const swipeButtonType = useSelector(state => state.swipeButtonsReducers.action);

  useEffect(() => {
      props.getTinderCards();
  }, []);

  useEffect(() => {
    if (props.tinderCards) {
      setPeople(props.tinderCards);
    }
  }, [props.tinderCards])

  useEffect(() => {
    if (_.eq(swipeButtonType, 'refresh')) {
      setPeople([]);
      props.getTinderCards();
      dispatch({ type: 'none' });
    }
  }, [swipeButtonType])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people && people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})`}}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  getTinderCards
};

const mapStateToProps = ({ tinderCardReducer }) => {
  return {
    tinderCards: tinderCardReducer.data,
    loading: tinderCardReducer.loading,
    message: tinderCardReducer.message,
    action: tinderCardReducer.action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TinderCards);
