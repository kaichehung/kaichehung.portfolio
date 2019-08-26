import React from 'react';
import { withRouter } from "react-router";
import { StyledBgComponent } from './Styled';

// A simple component that shows the pathname of the current location
class BgComponent extends React.Component {
    render() {
        const { match, location, history } = this.props;

        return (
                <StyledBgComponent>
                    {(this.props.location.pathname === '/')? (<div className='bg'></div>):(<div></div>)}
                </StyledBgComponent>
        )
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default withRouter(BgComponent);