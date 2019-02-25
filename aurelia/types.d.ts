interface Branch {
    name: string,
    order: number
}

interface User {
    name: string,
    id: number,
    order: number
}

interface State {
    branches: Branch[],
    users: User[],
    selectedBranch: Branch,
    selectedUser: User,
    craftCategory: 'branch' | 'user',
    craftedObject: Branch | User,
    showAddModal: boolean
}