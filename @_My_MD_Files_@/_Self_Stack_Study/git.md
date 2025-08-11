# 계정A용 키 생성
ssh-keygen -t ed25519 -C "accountA@example.com" -f ~/.ssh/id_accountA

# 계정B용 키 생성
ssh-keygen -t ed25519 -C "accountB@example.com" -f ~/.ssh/id_accountB



# repoA (계정A용)
git remote set-url origin git@github-A:AccountA/repoA.git

# repoB (계정B용)
git remote set-url origin git@github-B:AccountB/repoB.git
