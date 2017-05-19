import { Router } from 'express';
import * as GroupController from './controller';

const routes = new Router();

routes.post('/groups/new', GroupController.createGroup);
routes.post('/groups/:groupid/meetups/new', GroupController.createGroupMeetup);
routes.get('/groups/:groupid/meetups', GroupController.getGroupMeetups);

export default routes;
