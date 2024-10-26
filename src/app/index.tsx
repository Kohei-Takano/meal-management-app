import {View,Text,StyleSheet}from'react-native'

const Index=():JSX.Element=>{
    return(
        <View style={styles.container}>
            <View>
                <View>
                    <Text>購入した食品</Text>
                </View>
                <View>
                    <Text>ガリガリ君</Text>
                    <Text>1個</Text>
                    <Text>130円</Text>
                </View>
                <View>
                    <Text>セブンイレブン</Text>
                    <Text>2024年10月20日10時34分</Text>
                </View>
            </View>
            <View>
                <Text>＋</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Index