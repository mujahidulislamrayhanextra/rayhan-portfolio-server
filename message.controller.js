import Message from './text.model.js';


export  const create = async (req,res) => {
    try {
        const msgData = new Message(req.body);
        if(!msgData){
            return res.status(404).json({ msg: "User Data not Found"})
        }
         const savedMsgData = await msgData.save();
         res.status(200).json({savedMsgData,msg:'User Post Successfilly'})
    } catch (error) {
        res.status(500).json({error:error})
    }
}



export const getAll = async(req,res) => {
    try {
        

        const msgData = await Message.find();
        if(!msgData){
            return res.status(404).json({msg:"User "})
        }

        res.status(200).json(msgData);


    } catch (error) {
        res.status(500).json({error:error})
    }
}



export const getOne = async (req,res) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const msgExist = await Message.findById(id);
        if(!msgExist){
            return res.status(404).json({msg:"User "})
        }

            res.status(200).json(msgExist)


    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const update = async(req,res) =>{
    try {
        const id = req.params.id;
        const msgExist = await Message.findById(id);
        if(!msgExist){
                return res.status(401).json({msg: "User Not Found"});
        }


        const updateMsgData = await Message.findByIdAndUpdate(id,req.body, {new:true});
        res.status(200).json({updateMsgData,msg:'User Updated Successffully'});

    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deleteUser = async(req,res) => {
    try {
        
        const id = req.params.id;
          console.log(id);
        const msgExist = await Message.findById(id);

        if(!msgExist){
            return res.status(404).json({msg: "User Not Found"});
        }
       

        await Message.findByIdAndDelete(id);
        res.status(200).json({msg : "User Deleted Successfully"});



    } catch (error) {
        res.status(500).json({error:error})
    }
}