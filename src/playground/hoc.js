// Higher Order Component(HOC) - A component(HOC) that renders another component!
//Reuse code -- Επαναχρησιμοποίηση κωδικού
//Render hijacking -- Απόδοση πειρατεία
//Prop manipulation -- Χειρισμός Prop
//Abstract state -- Περίληψη κατάστασης


import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (//this is HOC high order component!
        <div>
            {props.isAdmin && <p>This is prive info.Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    ); 
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticate ? (
                <WrappedComponent { ...props}/>
            ) : (
                <p>Please login to view the info</p>
            )}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDom.render(<AdminInfo isAdmin={true} info="There are the details!" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticate={true} info="There are the details!" />, document.getElementById('app'));