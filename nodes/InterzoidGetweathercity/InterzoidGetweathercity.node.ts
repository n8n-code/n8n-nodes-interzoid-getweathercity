import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { weatherByCityAndStateDescription } from './resources/weather-by-city-and-state';

export class InterzoidGetweathercity implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Interzoid Getweathercity',
		name: 'N8nDevInterzoidGetweathercity',
		icon: { light: 'file:./interzoid-getweathercity.png', dark: 'file:./interzoid-getweathercity.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API delivers US city weather: temperature, wind speed/direction, humidity, visibility.',
		defaults: { name: 'Interzoid Getweathercity' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevInterzoidGetweathercityApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Weather By City And State",
					"value": "Weather By City And State",
					"description": ""
				}
			],
			"default": ""
		},
		...weatherByCityAndStateDescription
		],
	};
}
