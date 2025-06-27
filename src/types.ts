export interface ITask {
    id: string
    title: string
    description: string
    deuDate: string
    isCompleted: boolean
    priority: 'High' | 'Medium' | 'Low'
}
