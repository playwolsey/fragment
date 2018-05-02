import React, { PureComponent } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import {
  TabNavigator,
  TabBarBottom,
  StackNavigator,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Icon } from 'react-native-elements';

import HomeScreen from './screens/Home';
import CatesScreen from './screens/products/Cates';
import ListScreen from './screens/products/List';
// import DetailScreen from './screens/products/Detail';
// import ApplyScreen from './screens/products/Apply';
// import SettingsScreen from './screens/Me/Settings';
// import BorrowerScreen from './screens/Business/Borrower';
// import ProjectScreen from './screens/Business/Project';
// import BusinessScreen from './screens/Business/Business';
// import AddBorrowerScreen from './screens/Business/AddBorrower';
// import AddPersonBorrowerScreen from './screens/Business/AddPersonBorrower';
// import AddCompanyBorrowerScreen from './screens/Business/AddCompanyBorrower';
// import RecommendScreen from './screens/Business/Recommend';
import LoginScreen from './screens/Login';
import MeScreen from './screens/Me/Me';
import Loading from './screens/Loading';
import WebviewScreen from './screens/Webview';

/**
 * 基本路由模块
 * Home            首页模块
 * Cates           产品模块
 * Business        业务模块
 * Me              个人模块
 */
const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
    },
  },
  Cates: {
    screen: CatesScreen,
    navigationOptions: {
      // tabBarLabel: '产品',
      tabBarIcon: ({ tintColor }) => <Icon name="layers" size={25} color={tintColor} />,
    },
  },
  // Business: {
  //   screen: BusinessScreen,
  //   navigationOptions: {
  //     tabBarLabel: '业务',
  //     // tabBarIcon: ({ tintColor }) => <Icon name="folder-open" size={25} color={tintColor} />,
  //   },
  // },
  Me: {
    screen: MeScreen,
    navigationOptions: {
      // tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => <Icon name="perm-identity" size={25} color={tintColor} />,
    },
  },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazyLoad: true,
  tabBarOptions: {
    activeTintColor: '#00acff',
    showLabel: false,
  },
});

/**
 * 头部导航栏模块
 * Tabs                  底部栏模块
 * List                  产品列表模块
 * Settings              设置中心模块
 * Borrower              借款人页面模块
 * AddBorrower           添加借款人页面模块
 * AddPersonBorrower     添加借款人（个人）页面模块
 * AddCompanyBorrower    添加借款人（企业）页面模块
 * Project               项目页面模块
 * Recommend             我的推荐页面模块
 * Login                 登录页面模块
 */
const MainNavigator = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  List: {
    screen: ListScreen,
  },
  // Detail: {
  //   screen: DetailScreen,
  // },
  // Apply: {
  //   screen: ApplyScreen,
  // },
  // Settings: {
  //   screen: SettingsScreen,
  // },
  // Borrower: {
  //   screen: BorrowerScreen,
  // },
  // AddBorrower: {
  //   screen: AddBorrowerScreen,
  // },
  // AddPersonBorrower: {
  //   screen: AddPersonBorrowerScreen,
  // },
  // AddCompanyBorrower: {
  //   screen: AddCompanyBorrowerScreen,
  // },
  // Project: {
  //   screen: ProjectScreen,
  // },
  // Recommend: {
  //   screen: RecommendScreen,
  // },
  Webview: {
    screen: WebviewScreen,
  },
}, {
  mode: 'screen',
  headerMode: 'none',
});

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: LoginScreen },
  },
  {
    headerMode: 'none',
    cardStyle: { backgroundColor: 'red' },
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentScreen(route);
  }
  return route.routeName;
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router,
);
const addListener = createReduxBoundAddListener('root');

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router);
    if (currentScreen === 'Login') {
      return true;
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back());
      return true;
    }
    return false;
  };

  render() {
    const { dispatch, app, router } = this.props;
    if (app.loading) {
      return <Loading />;
    }
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: router,
          addListener,
        })}
      />
    );
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state);
}

export default Router;
