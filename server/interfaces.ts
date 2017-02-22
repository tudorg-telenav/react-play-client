export interface ServerConfig {
  databaseFile: string;
  listeningPort: number;
  clientOrigin: string;
}

export interface CareerLocation {
  id: number;
  name: string;
}

export interface CareerType {
  id: number;
  type: string;
}

export interface PressItem {
  id?: number;
  title: string;
  content?: string;
}

export interface Job {
  id: number;
  title: string;
  content: string;
}