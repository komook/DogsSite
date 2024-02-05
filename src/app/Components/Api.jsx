import  { React, Component } from "react";

export default class Api extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch("https://dog.ceo/api/breed/hound/images/random/7")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.message,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return<p>Error {error.message}</p>
        } else if (!isLoaded){
            return <p>Loading...</p>
        } else { 
            return(
                <div className='flex flex-wrap w-26'>
                    {items.map(item => (
                        
                        <img className="p-5" src={item}/>
                        
                    ))}
                </div>
            )
        }
    }

}


