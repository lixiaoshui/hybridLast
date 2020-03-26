import React, { Component } from 'react';
import {Text,View,SafeAreaView,StyleSheet,Image,ImageBackground,ScrollView,TextInput,Dimensions} from 'react-native';
import {Button} from '@ant-design/react-native';

const styles= StyleSheet.create({
    top:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#f23030',
        height:64
    },
    input:{
        width:400,
        height:40,
        borderRadius:28,
        backgroundColor:'#fbb8b8',
        marginTop:15,
        color:'white',
        paddingLeft:50,
        
    },
    search:{
        width:25,
        height:25,
        marginTop:23,
        marginRight:-35,
        zIndex:999
    },
    shoppingcart:{
        width:45,
        height:45,
        marginTop:10,
        marginRight:-35,
        marginLeft:15
    },
    slide:{
        width:500,
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        backgroundColor:'#eee',
        height:700
    },
    box:{
        height:120,
        backgroundColor:'white',
        flexDirection:'row',
        marginTop:15
    },
    boximg:{
        marginTop:10,
        marginLeft:20
    },
    boxtext:{
        marginTop:45,
        marginLeft:50,
        fontSize:20,
        width:120
    },
    boximg2:{
        marginTop:33,
        marginLeft:120
    },
    button:{
        width:420,
        height:50,
        backgroundColor:'#f23030',
        color:'white',
        marginTop:20,
        marginLeft:30,
        borderRadius:10
    },
    bto:{
        marginLeft:180,
        marginTop:50,
        color:'grey'
    }
})

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.top}>
                        <ImageBackground source={require('../assets/lsearch.jpg')} style={styles.search} />
                        <TextInput placeholder='请输入您要搜索的关键字' style={styles.input} />
                        <Image source={require('../assets/shoppingcart.jpg')} style={styles.shoppingcart} />
                    </View>
                    
                    <View>
                        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.slide} >
                                <Image source={require('../assets/lunbo.jpg')} style={{width:500,height:273}} />
                            </View>
                            <View style={styles.slide} >
                                <Image source={require('../assets/lunbo.jpg')} style={{width:500,height:273}} />
                            </View>
                            <View style={styles.slide} >
                                <Image source={require('../assets/lunbo.jpg')} style={{width:500,height:273}} />
                            </View>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.body}>
                        <View style={styles.box}>
                            <Image source={require('../assets/set.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>居家维修保养</Text>
                            <Image source={require('../assets/right.jpg')} style={styles.boximg2} />
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../assets/relax.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>住宿优惠</Text>
                            <Image source={require('../assets/right.jpg')} style={styles.boximg2} />
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../assets/transport.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>出行接送</Text>
                            <Image source={require('../assets/right.jpg')} style={styles.boximg2} />
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../assets/gift.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>E族活动</Text>
                            <Image source={require('../assets/right.jpg')} style={styles.boximg2} />
                        </View>
                        <Button style={styles.button}>发布需求</Button>
                        <Text style={styles.bto}>@E族之家 版权所有</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
