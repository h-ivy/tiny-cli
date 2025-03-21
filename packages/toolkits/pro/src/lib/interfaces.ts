/**
 * 控制台传入的参数
 */
export interface CliOption {
  clientArgs: any;
  clientOptions: any;
}

/**
 * 服务端类型
 */
export enum ServerFrameworks {
  EggJs = 'eggJs',
  NestJs = 'nestJs',
  SpringCloud = 'springCloud',
  Skip = ''
}

/**
 * 初始化问题的选项 -> 选择的值
 */
export interface ProjectInfo {
  description: string;
  framework: string;
  name: string;
  serverFramework: ServerFrameworks;
  dialect?: string;
  host?: string;
  port?: Number;
  database?: string;
  username?: string;
  password?: string;
}
