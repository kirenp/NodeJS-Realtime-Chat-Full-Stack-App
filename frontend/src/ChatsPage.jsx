import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"
const ChatsPage = (props) => {
    const ChatsProps = useMultiChatLogic('c60c49bf-0105-4261-886e-8f36555dfcb0', props.user.username, props.user.secret);
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...ChatsProps} />
        <MultiChatWindow {... ChatsProps} style={{height: '100vh'}} />    
    
    </div>
    )
  };
  export default ChatsPage;