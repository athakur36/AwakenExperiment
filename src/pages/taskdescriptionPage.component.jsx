import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Task from '../components/task.component';

const useStyles = makeStyles({});

const TaskPage = () => {
    const classes = useStyles();

    return (
        <div>
            <Task />
        </div>
    );
};

export default TaskPage;