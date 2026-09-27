"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || "development", process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        redisUrl: process.env.REDIS_URL, // <--- THIS LINE FIXES THE SESSION ISSUE
        http: {
            storeCors: process.env.STORE_CORS || "http://localhost:8000",
            adminCors: process.env.ADMIN_CORS || "http://localhost:9000",
            authCors: process.env.AUTH_CORS || "http://localhost:9000",
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        },
        databaseDriverOptions: {
            connection: {
                ssl: {
                    rejectUnauthorized: false,
                },
            },
        },
    },
    admin: {
        disable: false,
        path: "/app",
        backendUrl: process.env.MEDUSA_ADMIN_BACKEND_URL || process.env.BACKEND_URL || "http://localhost:9000",
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUU7QUFFakUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBRTdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDckMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLHlDQUF5QztRQUMxRSxJQUFJLEVBQUU7WUFDSixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksdUJBQXVCO1lBQzVELFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSx1QkFBdUI7WUFDNUQsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLHVCQUF1QjtZQUMxRCxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksYUFBYTtZQUNsRCxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksYUFBYTtTQUN6RDtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLFVBQVUsRUFBRTtnQkFDVixHQUFHLEVBQUU7b0JBQ0gsa0JBQWtCLEVBQUUsS0FBSztpQkFDMUI7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksdUJBQXVCO0tBQ3ZHO0NBQ0YsQ0FBQyxDQUFBIn0=