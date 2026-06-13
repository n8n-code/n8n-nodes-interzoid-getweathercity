import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class InterzoidGetweathercityApi implements ICredentialType {
        name = 'N8nDevInterzoidGetweathercityApi';

        displayName = 'Interzoid Getweathercity API';

        icon: Icon = { light: 'file:../nodes/InterzoidGetweathercity/interzoid-getweathercity.png', dark: 'file:../nodes/InterzoidGetweathercity/interzoid-getweathercity.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.interzoid.com',
                        required: true,
                        placeholder: 'https://api.interzoid.com',
                        description: 'The base URL of your Interzoid Getweathercity API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
