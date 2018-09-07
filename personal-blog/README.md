# Personal Blog
A blog created by Ernest Viola with the intention of documenting his journey after graduating from SDSU.

## Getting Started
Clone a copy
npm install

## Serving to AWS
aws s3 ls
npm run build && aws s3 sync build/ s3://bucket-name