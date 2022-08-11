import type { PluginListenerHandle } from '@capacitor/core';
export interface RoamPlugin {
  addListener(eventName: 'location', listenerFunc: (result: { location: Location, user: RoamUser }) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
}
export interface Location {
  latitude: number;
  longitude: number;
  accuracy?: number;
}
export interface RoamUser {
  userId?: string;
  description?: string;
}