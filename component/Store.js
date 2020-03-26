import React from 'react';
import {SafeAreaView,StyleSheet,ImageBackground,ScrollView,Image,View,Text,StatusBar, TextInput,} from 'react-native';

const styles = StyleSheet.create({
	topview:{
		flexDirection:'row',
		justifyContent:'center',
		borderBottomWidth:1,
		borderBottomColor:'#eee',
		backgroundColor:'white'
	},
	topinput:{
		width:420,
		height:40,
		color:'grey',
		borderRadius:5,
		backgroundColor:'#eee',
		marginTop:10,
		marginBottom:10
	},
	topimg:{
		width:25,
		height:25,
		marginTop:17,
		marginLeft:-46
	},
	midtext:{
		paddingTop:15,
		paddingBottom:15,
		paddingLeft:30,
		paddingRight:30,
		fontSize:16
	},
	botview:{
		backgroundColor:'#eee',
		justifyContent:'center',
		height:990
	},
	btmview:{
		width:222,
		height:310,
		backgroundColor:'white',
		marginRight:10
	},
	btmview2:{
		width:222,
		height:310,
		backgroundColor:'white'
	},
	btmtxt1:{
		paddingLeft:12,
		paddingRight:3
	},
	btmtxt2:{
		color:'red',
		paddingLeft:12,
		paddingTop:13
	},
	flex:{
		flexDirection:'row',
		justifyContent:'center',
		paddingBottom:10
	}
});

const App = () => {
  return (
	<>
      <StatusBar barStyle="dark-content" style={{backgroundColor:'#fff'}} />
      <SafeAreaView>
		<ScrollView>
			<View style={styles.topview} >
				<TextInput placeholder='请输入商品名称' style={styles.topinput} />
				<ImageBackground source={require('../assets/search.png')} style={styles.topimg} ></ImageBackground>
			</View>
			<View style={styles.topview} >
				<Text style={styles.midtext} >综合</Text>
				<Text style={styles.midtext} >销量</Text>
				<Text style={styles.midtext} >新品</Text>
				<Text style={styles.midtext} >价格</Text>
				<Text style={styles.midtext} >信用</Text>
			</View>
			<View style={styles.botview} >
				<View style={styles.flex} >
					<View style={styles.btmview} >
						<Image source={require('../assets/pic4.png')} style={{width:210,height:245,marginTop:-21}} />
						<Text style={styles.btmtxt1} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={styles.btmtxt2} >36.00</Text>
					</View>
					<View style={styles.btmview2} >
						<Image source={require('../assets/pic7.png')} style={{width:200,height:223}} />
						<Text style={styles.btmtxt1} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={styles.btmtxt2} >36.00</Text>
					</View>
				</View>
				<View style={styles.flex} >
					<View style={styles.btmview} >
						<Image source={require('../assets/pic4.png')} style={{width:210,height:245,marginTop:-21}} />
						<Text style={styles.btmtxt1} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={styles.btmtxt2} >36.00</Text>
					</View>
					<View style={styles.btmview2} >
						<Image source={require('../assets/pic7.png')} style={{width:200,height:223}} />
						<Text style={styles.btmtxt1} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={styles.btmtxt2} >36.00</Text>
					</View>
				</View>
				<View style={styles.flex} >
					<View style={styles.btmview} >
						<Image source={require('../assets/pic4.png')} style={{width:210,height:245,marginTop:-21}} />
						<Text style={styles.btmtxt1} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={styles.btmtxt2} >36.00</Text>
					</View>
					<View style={styles.btmview2} >
						<Image source={require('../assets/pic7.png')} style={{width:200,height:223}} />
						<Text style={styles.btmtxt1} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={styles.btmtxt2} >36.00</Text>
					</View>
				</View>
			</View>
		</ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;