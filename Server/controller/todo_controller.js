import todo from "../model/todo.js";

export const addtodo = async (req, res) => {
  try {
    const newtodo = await todo.create({
      data: req.body.data,
      createdAt: Date.now,
    });
    await newtodo.save();
    return res.status(200).json(newtodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getalltodos= async(req,res)=>
{
  try {
    
    const todos = await todo.find({}).sort({"createdAt":-1});
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }

}