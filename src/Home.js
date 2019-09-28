import React, { Component } from 'react'
import './Home.css'
//TODO: This is the home page and 
class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="jumbotron ">
                        <h1 className="display-4 task-title">Task Master Home</h1>
                    </header>
                </div>
                <div className="container task">
                    <h4>Create New Task</h4>
                    <form className="form-horizontal" action=" ">
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Name:</label>
                            <div className="col-sm-10">
                                <input type="text" id="person" value=" " />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Description:</label>
                            <div className="col-sm-10">
                                <input type="text" id="Description" value=" " />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Priority:</label>
                            <div className="col-sm-10">
                                <input type="text" id="person" value=" " />
                            </div>
                        </div>
                        <div className="col-sm-offset-2 col-sm-10 runTimeButtons">
                            <h4>Max Allowed Run-time</h4>
                            <button type="submit" className="btn btn-default butttonH">HH</button>
                            <button type="submit" className="btn btn-default butttonM">MM</button>
                            <button type="submit" className="btn btn-default butttonS">SS</button>
                        </div>
                        <button type="button" className="btn btn-success">Create Task</button>
                    </form>

                </div>


            </div>
        )
    }
}




export default Home