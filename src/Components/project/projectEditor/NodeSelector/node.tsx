import { Button, makeStyles } from '@material-ui/core';
import React, { useCallback } from 'react';
import { BlockState } from '../../../../core/block/BlockState';

const useBlockStyle = makeStyles({
  wrapper: {
    paddingLeft: 30,
  },
  item: {
    width: '100%',
    margin: 0,
    justifyContent: 'flex-start',
  },
});

type Props = {
  state : BlockState
}

const Node = ({state} : Props) => {
  const classes = useBlockStyle();

  const onDragStart = useCallback((event : React.DragEvent) => {
    const localEvent = event;
    localEvent.dataTransfer.setData('application/nodedata', JSON.stringify(state));
    localEvent.dataTransfer.effectAllowed = 'copy';
  }, [state]);

  return (
    <li className={classes.wrapper}>
      <Button
        className={classes.item}
        draggable={true}
        onDragStart={
          (event) => {
            onDragStart(event);
          }
        }>
        <h5 style={{ margin: 0 }}>
          {state.type}
        </h5>
      </Button>
    </li>
  );
};

export default Node;