import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ViewImage: { id: number };
};

export type RouteKeys = keyof RootStackParamList;

export type RoutesProps<T extends RouteKeys> = RouteProp<RootStackParamList, T>;

export type NavigationProps<T extends RouteKeys = RouteKeys> = NativeStackScreenProps<
  RootStackParamList,
  T
>['navigation'];

export type ScreenProp<T extends RouteKeys> = NativeStackScreenProps<RootStackParamList, T>;
