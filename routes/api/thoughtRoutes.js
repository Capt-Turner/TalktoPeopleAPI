const router=require('express').Router();
const {
    getThoughts,
    getAThought,
    think,
    reThink,
    unThink,
    react,
    removeReact,
}=require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(think);

router.route('/:thoughtid').get(getAThought).put(reThink).delete(unThink);

router.route('/:thoughtid/reactions').post(react).delete(removeReact);

module.exports=router;