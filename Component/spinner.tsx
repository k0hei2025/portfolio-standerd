import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {actionStore , RootState} from '../store/store'
import { useDispatch, useSelector } from 'react-redux';
 
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearBuffer() {
  const classes = useStyles();
 // const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});

    const progress = useSelector((state : RootState)=>state.progress)
    const dispatch = useDispatch();


  React.useEffect(() => {
               
    progressRef.current = () => {

      if (progress > 100) {
                     dispatch(actionStore.setSpinnerTools({
                                    progress1 : 0,
                                    buffer1 : 10
                              }))
     
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        dispatch(actionStore.setSpinnerTools({
                       progress1 : (progress + diff),
                        buffer1 : (progress + diff + diff2)
        }))

      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress  variant="buffer" value={progress} valueBuffer={buffer} />
    </div>
  );
}