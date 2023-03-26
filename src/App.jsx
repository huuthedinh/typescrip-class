import { useState } from "react"
import Square from "./component/Square"
import Board from "./component/Board"
// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
// State: Trạng thái - Bộ nhớ của component, Quyết định component được hiển thị như thế nào
const App = () => {

    return <div className="h-[100vh] flex justify-center items-center">
        <Board>

        </Board>
    </div>
}
export default App