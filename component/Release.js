import React, { Component } from 'react'
import { Text, View,SafeAreaView,StyleSheet,ScrollView,ToastAndroid } from 'react-native'
import {Icon} from '@ant-design/react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'

const styles=StyleSheet.create({
    top:{
        flexDirection:'row',
        backgroundColor:'red',
        height:55
    },
    topicon:{
        color:'white',
        marginTop:13,
        marginLeft:15
    },
    topt1:{
        fontSize:22,
        marginTop:13,
        marginLeft:160,
        color:'white'
    },
    topt2:{
        fontSize:40,
        marginTop:-13,
        marginLeft:130,
        color:'white'
    },
    content:{
        flexDirection:'row',
        backgroundColor:'white',

    },
    contentt1:{
        fontSize:18,
        marginTop:32,
        marginLeft:20,
        width:300
    },
    contentt2:{
        fontSize:18,
        marginTop:32,
        // marginLeft:-5
    },
    contentt3:{
        fontSize:18,
        marginTop:32,
        // marginLeft:20
    },
    bottom:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingTop:40,
        paddingBottom:40
    },
    bot1:{
        width:100,
        height:40,
        lineHeight:40,
        borderRadius:20,
        backgroundColor:'red',
        color:'white',
        marginLeft:30,
        marginTop:20
    },
    bot2:{
        marginTop:30,
        marginLeft:90,
        fontSize:15
    },
    bot3:{
        width:100,
        height:40,
        lineHeight:40,
        borderRadius:20,
        backgroundColor:'red',
        color:'white',
        marginLeft:80,
        marginTop:20
    }
})

export default class Release extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            ans:'已回复',
            inans:'待回复'
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(preProps,PreState){
        if(this.state.page != PreState.page){
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    lastPage=()=>{
        var p = this.state.page;
        if(p>1){
            p--;
            this.setState({
                page:p
            })
        }else{
            ToastAndroid.show('已经到底了哦~',ToastAndroid.TOP);
        }
    }
    nextPage=()=>{
        var p = this.state.page;
        p++;
        this.setState({
            page:p
        })
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.top} >
                        <Icon name='left' style={styles.topicon} onPress={()=>Actions.pop()} />
                        <Text style={styles.topt1} >我的发布</Text>
                        <Text style={styles.topt2} >...</Text>
                    </View>
                    {
                        this.state.data.map((item)=>(
                            <View style={styles.content} >
                                <Text style={styles.contentt1} > {item.title.length<15?item.title:item.title.substr(0,15)+'...'} </Text>
                                <Text style={styles.contentt2} > {item.create_at.substr(0,9)} </Text>
                                <Text style={styles.contentt3} > {Math.round(Math.random())==0?this.state.ans:this.state.inans} </Text>
                            </View>
                        ))
                    }
                    <View style={styles.bottom} >
                        <Button style={styles.bot1} onPress={()=>this.lastPage()} >上一页</Button>
                        <Text style={styles.bot2} >第 {this.state.page} 页</Text>
                        <Button style={styles.bot3} onPress={()=>this.nextPage()} >下一页</Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
