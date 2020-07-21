import React, { Component } from 'react';

import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import { Box, Select, MenuItem, Typography, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// import {connect} from 'react-redux';

const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

class FacilityCard extends Component {
  createHours= () => {
    let hours = []

    for (let i = 0; i < 25; i++) {
      hours.push(<MenuItem value={i}>{i}:00 To {i+1}:00</MenuItem>)
    }
    return hours
  }

  render() {
    const {classes}=this.props;

    return (
      <div>
      <Card>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Tennis Court
            </Typography>
            <CardMedia
              style={{ height: 0, paddingTop: "56%" }}
              image={require("../assets/tc.jpg")}
              title="tc"
            />

            <Box m={2} pt={3}>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Booking Date"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <br/>
                <Typography variant="body">
                Time  :
                </Typography>

                <Select
                  label="From"
                >

                {this.createHours()}
                </Select>

                  <p/>
                <Button variant="contained" color="secondary">
                  Book
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </div>
    );
  }
}
FacilityCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (withStyles(useStyles)(FacilityCard));
