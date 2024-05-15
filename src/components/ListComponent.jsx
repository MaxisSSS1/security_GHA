import React from 'react'
import ListItemComponent from './ListItemComponent'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "../styles.css"

export default function ListComponent({ listItems, updateItem, removeItem, showEmptyListMessage }) {
  return (
    <ul className='list'>
      <TransitionGroup>
        {
          listItems.map(item =>
            <CSSTransition
              onEnter={()=>{
                  showEmptyListMessage(false);
              }}
              onExited={()=>{
                if(listItems.length == 1){
                  showEmptyListMessage(true);
                }
              }}
              key={item.id}
              timeout ={500}
              classNames="item"
              >
              <ListItemComponent key={item.id} listItem={item} updateItem={updateItem} removeItem={removeItem} />
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </ul>
  )
}
