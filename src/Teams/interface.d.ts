export interface TeamInterface {
  name: string;
  coordinator: string;
}

export interface TeamResponse {
  error: string;
  savedTeam: TeamInterface;
}