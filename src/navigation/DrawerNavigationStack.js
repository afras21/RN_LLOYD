import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    HelpScreen,
    FAQScreen
} from '../screens';

import BottomTab from './BottomTabNavigationStack';
import CustomDrawer from '../components/CustomDrawer';
import { colors, fonts } from '../theme';
import { SlideInDown } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();
const DrawerNavigationStack = ({ navigation }) => {
    return(
        <Drawer.Navigator
            initialRouteName={'BottomTab'}   
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerStatusBarAnimation: 'fade',
                drawerStyle: styles.drawerStyle
            }}     
            
            drawerContent={props => <CustomDrawer {...props } />}
        >
            <Drawer.Screen 
                name={'BottomTab'} 
                component={BottomTab}
                options={{
                    title: 'Home',
                    drawerActiveTintColor: colors.drawerText,
                    drawerActiveBackgroundColor: colors.drawerHeaderColor,
                    drawerLabelStyle: styles.drawerLabelStyle
                }}
            />
            <Drawer.Screen 
                name={'HelpScreen'} 
                component={HelpScreen} 
                options={{
                    title: 'Help',
                    drawerActiveTintColor: colors.drawerText,
                    drawerActiveBackgroundColor:  colors.drawerHeaderColor,
                    drawerLabelStyle: styles.drawerLabelStyle
                }}
            />
            <Drawer.Screen 
                name={'FAQScreen'} 
                component={HelpScreen} 
                options={{
                    title: 'FAQ',
                    drawerActiveTintColor: colors.drawerText,
                    drawerActiveBackgroundColor:  colors.drawerHeaderColor,
                    drawerLabelStyle: styles.drawerLabelStyle
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerLabelStyle: {
        color: colors.drawerText,
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold
    },
    drawerStyle: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        height: '95%',
        top: '5%',
        width: '80%'
    }
})

export default DrawerNavigationStack;