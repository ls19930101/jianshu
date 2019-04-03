import React, {PureComponent} from 'react';

class Writer extends PureComponent{
    render(){
        return (
            <div>Writer</div>

        )
    }

    componentDidMount(){
        var arr = new Array(3)
        arr[0] = "George"
        arr[1] = "John"
        arr[2] = "Thomas"
        console.log(arr.slice(-1))
    }
}
export default Writer;  