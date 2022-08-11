export interface RoamPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
