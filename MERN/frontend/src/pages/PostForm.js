import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {usePosts} from "../context/postContext";
import { useNavigate, useParams, Link} from "react-router-dom";
import { useEffect,useState } from "react";

export function PostForm() {
  
  const {createPost, getPost, updatePost} = usePosts()
  const navigate = useNavigate()
  const params =useParams()

  const [post, setPost]= useState({
      nameRoutine:'',
      timeBegin: '',
      timeEnd: '',
      numberOfExercises:'',
      description:''
  })

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost({
          nameRoutine:post.nameRoutine,
          timeBegin: post.timeBegin,
          timeEnd: post.timeEnd,
          numberOfExercises:post.numberOfExercises,
          description:post.description
        });
      }
    })();
  }, [params.id, getPost]);

  
  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">

        <header className="text-xl flex justify-between items-center py-4 text-white" >
          <h3>New TrainRoutine</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">Go back</Link>
        </header>
      <Formik
      initialValues={post}
      validationSchema={Yup.object({
        nameRoutine: Yup.string().required("Name of routine cant be null"),
        timeBegin: Yup.number().min(1,"The minimun time begin is 1 mins").max(15,"The maximum time begin is 15 mins"),
        timeEnd: Yup.number().min(20,"The minimun time end is 20 mins").max(120,"The maximum time end is 120 mins"),
        numberOfExercises:Yup.number().required("Number of exercises of routine cant be null"),
        description:Yup.string()
      })}
      onSubmit={ async (values,actions)=> {
        if(params.id){
          await updatePost(params.id,values);
        
        }else{
          await createPost(values);
        }
        navigate("/")        
      }}
      enableReinitialize
      >

        { ({handleSubmit}) => (
        <Form onSubmit={handleSubmit}>

          <label htmlFor="nameRoutine" 
          className="text-sm block font-bold text-gray-400">Name Routine</label>
          <Field name='nameRoutine' placeholder="nameRoutine"
          className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4'/>
          <ErrorMessage component="p" className="text-red-400 text-sm" name="nameRoutine"/>


          <label htmlFor="timeBegin" 
          className="text-sm block font-bold text-gray-400">Time Begin</label>
          <Field name='timeBegin' placeholder="timeBegin" className='px-3 py-2 focus:outline-none 
          rounded bg-gray-600 text-white w-full mb-4'/>
          <ErrorMessage component="p" className="text-red-400 text-sm" name="timeBegin"/>

          <label htmlFor="timeEnd" 
          className="text-sm block font-bold text-gray-400">Time End</label>
          <Field name='timeEnd' placeholder="timeEnd" className='px-3 py-2 focus:outline-none
           rounded bg-gray-600 text-white w-full mb-4'/>
          <ErrorMessage component="p" className="text-red-400 text-sm" name="timeEnd"/>


          <label htmlFor="numberOfExercises" 
          className="text-sm block font-bold text-gray-400 m">Number Of Exercises</label>
          <Field name='numberOfExercises' placeholder="numberOfExercises" className='px-3 py-2 
          focus:outline-none rounded bg-gray-600 text-white w-full mb-4'/>
          <ErrorMessage component="p" className="text-red-400 text-sm" name="numberOfExercises"/>

          <label htmlFor="description" 
          className="text-sm block font-bold text-gray-400">Description</label>
          <Field name='description' placeholder="description" className='px-3 py-2 focus:outline-none
           rounded bg-gray-600 text-white w-full mb-4' component="textarea" rows={3}/>
          <ErrorMessage component="p" className="text-red-400 text-sm " name="description"/>
          
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded 
          mt-2 text-white focus:outline-none disabled:bg-indigo-400">Save</button>
        </Form>
        )}

      </Formik>
      </div>
      
    </div>
  )
}
