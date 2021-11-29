import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = WrappedComponent => ({
        isloading,
        ...otherProps
    }) => {
        return isloading
            ? (
                <Spinner />
            )
            : (<WrappedComponent {...otherProps}/>);
    };

export default WithSpinner;