import React, { PropsWithChildren, RefObject } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export interface IMenuHorizontalModel{
    setFixedFromOffset?:()=>number | null;
}

interface IState{
    fixedTop:boolean;
}

export class MenuHorizontal extends React.Component<IMenuHorizontalModel, IState>{

    auxRef = React.createRef<HTMLDivElement>();
    state:Readonly<IState> = {
        fixedTop: false
    }
    constructor(props:IMenuHorizontalModel) {
        super(props);
        if(this.props.setFixedFromOffset)
        {
            window.onscroll = () => {
                let offset = this.props.setFixedFromOffset!();
                if(offset){
                    let nextState = document.documentElement.scrollTop > offset;
                    if(nextState != this.state.fixedTop)
                    {
                        this.setState({fixedTop:nextState});
                    }
                }

            }
        }
    }

    render()
    {
        console.log("refresh");
        return  <Navbar bg="light" variant="light" expand="md" fixed={this.state.fixedTop?"top":undefined}>
                        <Navbar.Brand href="#home">Muxo Code</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>                
    }
}
