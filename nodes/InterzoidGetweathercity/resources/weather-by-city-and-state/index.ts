import type { INodeProperties } from 'n8n-workflow';

export const weatherByCityAndStateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Weather By City And State"
					]
				}
			},
			"options": [
				{
					"name": "Getweather",
					"value": "Getweather",
					"action": "Gets current weather information for a US city and state",
					"description": "Use city and state to retrieve current US weather information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getweather"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getweather",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Weather By City And State"
					],
					"operation": [
						"Getweather"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather By City And State"
					],
					"operation": [
						"Getweather"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"required": true,
			"description": "City for weather information",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather By City And State"
					],
					"operation": [
						"Getweather"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"required": true,
			"description": "State for weather information",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather By City And State"
					],
					"operation": [
						"Getweather"
					]
				}
			}
		},
];
