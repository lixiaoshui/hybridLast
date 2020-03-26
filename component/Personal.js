import React, { Component,useState,useEffect } from 'react';
import {Text,View,SafeAreaView,StyleSheet,Image,ScrollView,Animated, AsyncStorage,TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import {Icon} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const styles= StyleSheet.create({
    top:{
        backgroundColor:'#f23030',
        height:290
    },
    topimg:{
        marginTop:30,
        marginLeft:130
    },
    toptext:{
        fontSize:22,
        color:'white',
        marginLeft:160,
        marginTop:20
    },
    body:{
        height:900,
        backgroundColor:'#eee'
    },
    box1:{
        height:70,
        flexDirection:'row',
        backgroundColor:'white',
        borderBottomColor:'#eee',
        borderBottomWidth:1,
    },
    box1text:{
        fontSize:20,
        marginTop:20,
        marginLeft:20,
        color:'#4e4e4e'
    },
    box2:{
        backgroundColor:'white',
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:15
    },
    bot:{
        height:70,
        flexDirection:'row',
        backgroundColor:'white',
        borderBottomColor:'#eee',
        borderBottomWidth:1,
    },
    bottext:{
        fontSize:20,
        marginTop:20,
        marginLeft:20,
        color:'#4f4e4e'
    },
    box21:{
        height:125,
        width:150,
        justifyContent:'center'
    },
    box21text:{
        fontSize:20,
        marginLeft:50,
        marginTop:10,
        color:'#4f4e4e'
    },
    box3:{
        backgroundColor:'white',
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:15
    },
    box5:{
        height:125,
        width:170,
        justifyContent:'center'
    },
    box5text:{
        fontSize:20,
        marginLeft:30,
        marginTop:10,
        color:'#4f4e4e'
    }
})

export default class Personal extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:''
        }
    }
    // takephoto=()=>{
    //     ImageCropPicker.openCamera({
    //         width:300,
    //         height:400,
    //         cropping:true,
    //     }).then(image=>{
    //         AsyncStorage.setItem('image',image.path);
    //         AsyncStorage.getItem('image').then((res)=>{
    //             this.setState({imageUrl:{uri:res}})
    //         })
    //     });
    // }
    exit=()=>{
        AsyncStorage.clear();
        Actions.login();
    }
    
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    
                    {/* 头像部分 */}
                    <View style={styles.top}>
                        <Button>
                            <Image source={require('../assets/header.jpg')} style={styles.topimg} />
                        </Button>
                        <Text style={styles.toptext}>BINNU DHILLON</Text>
                    </View>

                    <TouchableOpacity
                            style={{
                                width: '80%',
                                height: 40,
                                backgroundColor: '#ccc',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom:30,
                                marginLeft:40
                            }}
                            onPress={this.exit}>
                            <Text>点击这里，退出登陆</Text>
                        </TouchableOpacity>


                    <View style={styles.body}>
                        <View style={styles.box1}>
                            <Icon color={'#999'} size={30} style={{marginTop:15,marginLeft:20}} name='user' />
                            <Text style={styles.box1text}>我的个人中心</Text>
                        </View>

                        <View style={styles.box2}>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='file' style={{marginLeft:60}} />
                                <Text style={styles.box5text} onPress={()=>Actions.release()} >我的发布(点我)</Text>
                            </View>
                            {/* <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='setting' style={{marginLeft:65}} />
                                <Text style={styles.box21text}>账户管理</Text>
                            </View> */}
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='star' style={{marginLeft:65}} />
                                <Text style={styles.box21text}>收货地址</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='idcard' style={{marginLeft:70}} />
                                <Text style={styles.box21text}>我的信息</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='file-text' style={{marginLeft:65}} />
                                <Text style={styles.box21text}>我的订单</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='qrcode' style={{marginLeft:65}} />
                                <Text style={{fontSize:20,marginLeft:40,marginTop:10,color:'#4f4e4e'}}>我的二维码</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='dollar' style={{marginLeft:65}} />
                                <Text style={styles.box21text}>我的积分</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='star' style={{marginLeft:65}} />
                                <Text style={styles.box21text}>我的收藏</Text>
                            </View>
                        </View>
                        
                        <View style={styles.bot}>
                            <Icon color={'#999'} size={30} style={{marginTop:15,marginLeft:20}} name='user' />
                            <Text style={styles.bottext}>E族活动</Text>
                        </View>

                        <View style={styles.box3}>
                            <View style={styles.box5}>
                                <Icon color={'#999'} size={45} name='tool' style={{marginLeft:65}} />
                                <Text style={styles.box5text}>居家维修保养</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='car' style={{marginLeft:60}} />
                                <Text style={{fontSize:20,marginLeft:40,marginTop:10,color:'#4f4e4e'}}>出行接送</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='user' style={{marginLeft:55}} />
                                <Text style={styles.box5text}>我的受赠人</Text>
                            </View>
                            <View style={styles.box5}>
                                <Icon color={'#999'} size={45} name='home' style={{marginLeft:65}} />
                                <Text style={styles.box5text}>我的住宿优惠</Text>
                            </View>
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='flag' style={{marginLeft:65}} />
                                <Text style={{fontSize:20,marginLeft:40,marginTop:10,color:'#4f4e4e'}}>我的活动</Text>
                            </View>
                            {/* 我的发布部分 */}
                            <View style={styles.box21}>
                                <Icon color={'#999'} size={45} name='file' style={{marginLeft:60}} />
                                <Text style={styles.box5text} onPress={()=>Actions.release()} >我的发布</Text>
                            </View>
                        </View>
                        
                        <Text style={{color:'#999',fontSize:15,marginLeft:170,marginTop:30}}>BINNU DHILLON | 退出</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

