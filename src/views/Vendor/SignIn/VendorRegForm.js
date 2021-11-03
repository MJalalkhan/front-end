import React from "react";
import { Grid } from "@material-ui/core";

const VendorRegForm = () => {
  
  return (
    <div>
      <form /*onSubmit={handleSubmit}*/>
        <p className="h4 text-center mb-4">Register</p>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <label className="grey-text">Full Name</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Email Address</label>
            <input type="email" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Residential Address</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Contact no.</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Shop Name</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label for="cars">Shop Based in:</label>

            <select name="Shop Location" id="location">
              <option value="pakistan">Pakistan</option>
              <option value="afghanistan">Afghanistan</option>
              <option value="india">India</option>
              <option value="china">China</option>
            </select>
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Account no.</label>
            <input type="text" className="form-control" 
            />
          </Grid>
          <br />
          <Grid item xs={6}>
            <p>Account Type</p>
            <input type="radio" value="Male" name="personal" /> Personal
            <input type="radio" value="Female" name="business" /> Business
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Password</label>
            <input type="password" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Confirm Password</label>
            <input type="password" className="form-control" 
            />
          </Grid>
          <Grid item xs={12}>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default VendorRegForm;
