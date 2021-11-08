import React from 'react'
import {View} from 'react-native'
import PaginationDot from 'react-native-animated-pagination-dot'
 
class ExampleDotPaginate extends React.Component {
    state={
        currentPage: 0,
        maxPage:3,
    };
    
    render(){
        const {currentPage, maxPage} = this.state;
        const color = 'black';
        
        return (
            <View style={{flex:1,}}>
                <PaginationDot 
                    activeDotColor={color} 
                    curPage={currentPage} 
                    maxPage={maxPage}
                />
            
            </View>
        )
    }
}
 
export default ExampleDotPaginate;